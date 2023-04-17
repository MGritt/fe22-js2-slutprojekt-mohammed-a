import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, deleteDoc, setDoc, addDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser, UserCredential, User, updateProfile } from 'firebase/auth';

// Firebase app initialization
const firebaseConfig = {
  apiKey: "AIzaSyDiIjPU9LYag_w_Ictyyf9Jjtplr07iBoI",
  authDomain: "social-529c9.firebaseapp.com",
  projectId: "social-529c9",
  storageBucket: "social-529c9.appspot.com",
  messagingSenderId: "1001432544500",
  appId: "1:1001432544500:web:732fd9906d025791f55aa1"
};

const app = initializeApp(firebaseConfig);

// Get Firestore and Auth references
const db = getFirestore(app);
const auth = getAuth(app);

// Login function
const login = async (email: string, password: string) => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;
    // handle successful login
    console.log('logged in?');
    const loginWrapper = document.querySelector('#loginWrapper');
    loginWrapper.innerHTML = '';
    console.log(auth.currentUser);
    const loggedAs = document.querySelector('#loggedIn');
    loggedAs.innerText = 'logged in as '+auth.currentUser?.email;
    profilePicture = document.createElement('img');
    profilePicture.src = auth.currentUser?.photoURL;
    loggedAs.append(profilePicture);

  const users = await loadAllUsers();
  displayUserEmails(users);

    // Function to create a new message
    const createMessage = async (message: string) => {
      try {
        // Add a new document to the 'messages' collection
        const messageRef = collection(db, auth.currentUser?.uid);
        await addDoc(messageRef, {
          message: message,
          userEmail: auth.currentUser?.email,
          userId: auth.currentUser?.uid,
          userImage: auth.currentUser?.photoURL,
          timestamp: new Date()
        });

        // Display all messages
        displayMessages();
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    };

    // Function to display all messages
    const displayMessages = async () => {
      try {
        const messagesRef = collection(db, auth.currentUser?.uid);
        const querySnapshot = await getDocs(query(messagesRef, orderBy('timestamp', 'desc')));

        // Clear previous messages
        const messagesDiv = document.querySelector('#messages');
        messagesDiv.innerHTML = '';

        // Loop through all documents and display them
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const messageDiv = document.createElement('div');
          messageDiv.classList.add('message');
          messageDiv.innerHTML = `
          <img src=${data.userImage}></img>
            <p>${data.message}</p>
            <p>Posted by: ${data.userEmail}</p>
          `;
          messagesDiv.appendChild(messageDiv);
        });
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    };

    // Create post form
    const postForm = document.createElement('form');
    postForm.id = 'postForm';
    postForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const messageInput = document.querySelector('#messageInput');
      const message = messageInput.value.trim();
      createMessage(message);
      messageInput.value = '';
    });

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.id = 'messageInput';
    messageInput.name = 'message';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Post';

    postForm.appendChild(messageInput);
    postForm.appendChild(submitButton);

    // Create messages container
    const messagesContainer = document.createElement('div');
    messagesContainer.id = 'messages';

    // Create main container and add elements
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    mainContainer.appendChild(postForm);
    mainContainer.appendChild(messagesContainer);

    // Add main container to body
    document.body.appendChild(mainContainer);

    // Display all messages by default
    displayMessages();


  } catch (error) {
    // handle login error
    console.log('fail in?');
  }
};

// Sign up function
const signUp = async (email: string, password: string, pic: number) => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;
    console.log(pic);
    // add user data to Firestore
    await setDoc(doc(collection(db, 'users'), user.uid), {
      email: user.email,
      uid: user.uid
    });

    // Update the user profile with photoURL
    await updateProfile(userCredential.user, {
      photoURL: `/images/${pic}.png`
    });

    // handle successful sign up
  } catch (error) {
    // handle sign up error
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    // handle successful logout
  } catch (error) {
    // handle logout error
  }
};

// Function to run if user is already signed in
const userIsSignedIn = () => {
  // Add your code here
};

// Check if user is already signed in
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, call userIsSignedIn function
    userIsSignedIn();
  }
});

// Add event listeners to login and sign up forms
const loginForm = document.querySelector('#log');
const signUpForm = document.querySelector('#sign');
const profilePic = signUpForm.querySelectorAll('input[type="radio"]');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.querySelector('#log input[name="email"]');
  const passwordInput = document.querySelector('#log input[name="password"]');
  const email = emailInput.value;
  const password = passwordInput.value;
  login(email, password);
});

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.querySelector('#sign input[name="email"]');
  const passwordInput = document.querySelector('#sign input[name="password"]');
  let pic = '';
  profilePic.forEach((selection) => {
    if (selection.checked) {
      pic = selection.value;
    }
  });
  const email = emailInput.value;
  const password = passwordInput.value;
  signUp(email, password, pic);
});

async function loadAllUsers(): Promise<Array<{ email: string }>> {
  const usersRef = collection(db, 'users');
  const querySnapshot = await getDocs(usersRef);
  const users: Array<{ email: string }> = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    //console.log(data);
    users.push({ email: data.email, uid: data.uid });
  });

  return users;
}

function displayUserEmails(users: Array<{ email: string }>) {
  const userList = document.createElement('ul');
  userList.classList.add('userList');
  users.forEach((user) => {
    console.log(user.uid);
    const listItem = document.createElement('li');
    listItem.textContent = user.email;
    listItem.setAttribute('value', user.uid);
    userList.appendChild(listItem);
  });

  // Append the user list to a container in the DOM
  const container = document.querySelector('#container');
  container.appendChild(userList);
  addUserEventListeners();
}

const displayUserProfile = async (uid: string) => {
  try {
    const messagesRef = collection(db, uid);
    const querySnapshot = await getDocs(query(messagesRef, orderBy('timestamp', 'desc')));

    // Clear previous messages
    const messagesDiv = document.querySelector('#messages');
    messagesDiv.innerHTML = '';

    // Loop through all documents and display them
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.innerHTML = `
      <img src=${data.userImage}></img>
        <p>${data.message}</p>
        <p>Posted by: ${data.userEmail}</p>
      `;
      messagesDiv.appendChild(messageDiv);
    });
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

function addUserEventListeners() {
  const listItems = document.querySelectorAll('.userList > li');

  listItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      const uid = listItem.getAttribute('value');
      displayUserProfile(uid);
    });
  });
}

// Function to delete the user's account
async function deleteAccount() {
  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await deleteDoc(userDocRef);
      await deleteUser(currentUser);
      console.log('User account deleted successfully.');
      location.reload();
      // Perform any additional actions after the account is deleted
    } else {
      console.log('No user is currently logged in.');
    }
  } catch (error) {
    console.error('Error deleting user account:', error);
  }
}

// Add event listener to the "deleteBtn" button
const deleteBtn = document.querySelector('#deleteBtn');
deleteBtn.addEventListener('click', deleteAccount);
