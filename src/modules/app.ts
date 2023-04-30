import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, deleteDoc, setDoc, addDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser, UserCredential, User, updateProfile } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDiIjPU9LYag_w_Ictyyf9Jjtplr07iBoI",
  authDomain: "social-529c9.firebaseapp.com",
  projectId: "social-529c9",
  storageBucket: "social-529c9.appspot.com",
  messagingSenderId: "1001432544500",
  appId: "1:1001432544500:web:732fd9906d025791f55aa1"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const login = async (email: string, password: string) => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;
    console.log('logged in?');
    const loginWrapper = document.querySelector('#loginWrapper');
    loginWrapper.innerHTML = '';
    console.log(auth.currentUser);
    const loggedAs = document.querySelector('#loggedIn');
    loggedAs.innerText = 'logged in as '+auth.currentUser?.email;
    const profilePicture = document.createElement('img');
    profilePicture.src = auth.currentUser?.photoURL;
    loggedAs.append(profilePicture);

  const users = await loadAllUsers();
  displayUserEmails(users);

    const createMessage = async (message: string) => {
      try {
        const messageRef = collection(db, auth.currentUser?.uid);
        await addDoc(messageRef, {
          message: message,
          userEmail: auth.currentUser?.email,
          userId: auth.currentUser?.uid,
          userImage: auth.currentUser?.photoURL,
          timestamp: new Date()
        });

        displayMessages();
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    };

    const displayMessages = async () => {
      try {
        const messagesRef = collection(db, auth.currentUser?.uid);
        const querySnapshot = await getDocs(query(messagesRef, orderBy('timestamp', 'desc')));

        const messagesDiv = document.querySelector('#messages');
        messagesDiv.innerHTML = '';

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


    const messagesContainer = document.createElement('div');
    messagesContainer.id = 'messages';

    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    mainContainer.appendChild(postForm);
    mainContainer.appendChild(messagesContainer);

    document.body.appendChild(mainContainer);

    displayMessages();


  } catch (error) {
    console.log('fail in?');
  }
};


const signUp = async (email: string, password: string, pic: number) => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;
    console.log(pic);
    await setDoc(doc(collection(db, 'users'), user.uid), {
      email: user.email,
      uid: user.uid
    });

    await updateProfile(userCredential.user, {
      photoURL: `/images/${pic}.png`
    });

  } catch (error) {
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
  }
};


const userIsSignedIn = async (user) => {
  console.log('logged in?');
  const loginWrapper = document.querySelector('#loginWrapper');
  loginWrapper.innerHTML = '';
  console.log(auth.currentUser);
  const loggedAs = document.querySelector('#loggedIn');
  loggedAs.innerText = 'logged in as '+auth.currentUser?.email;
  const profilePicture = document.createElement('img');
  profilePicture.src =   (auth.currentUser?.photoURL == '/images/1.png') ? '1.3d884485.png' : '' (auth.currentUser?.photoURL == '/images/2.png') ? '2.39edb27f.png' : '' (auth.currentUser?.photoURL == '/images/3.png') ? '3.5468cb7d' : '';
  loggedAs.append(profilePicture);

const users = await loadAllUsers();
displayUserEmails(users);

  const createMessage = async (message: string) => {
    try {
      const messageRef = collection(db, auth.currentUser?.uid);
      await addDoc(messageRef, {
        message: message,
        userEmail: auth.currentUser?.email,
        userId: auth.currentUser?.uid,
        userImage: auth.currentUser?.photoURL,
        timestamp: new Date()
      });

      displayMessages();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const displayMessages = async () => {
    try {
      const messagesRef = collection(db, auth.currentUser?.uid);
      const querySnapshot = await getDocs(query(messagesRef, orderBy('timestamp', 'desc')));

      const messagesDiv = document.querySelector('#messages');
      messagesDiv.innerHTML = '';

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `
      <img src=${(data.userImage == '/images/1.png') ? '1.3d884485.png' : '' (data.userImage == '/images/2.png') ? '2.39edb27f.png' : '' (data.userImage == '/images/3.png') ? '3.5468cb7d' : ''}></img>
          <p>${data.message}</p>
          <p>Posted by: ${data.userEmail}</p>
        `;
        messagesDiv.appendChild(messageDiv);
      });
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };

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


  const messagesContainer = document.createElement('div');
  messagesContainer.id = 'messages';

  const mainContainer = document.createElement('div');
  mainContainer.id = 'mainContainer';
  mainContainer.appendChild(postForm);
  mainContainer.appendChild(messagesContainer);

  document.body.appendChild(mainContainer);

  displayMessages();

};


auth.onAuthStateChanged((user) => {
  if (user) {
    userIsSignedIn(user);
  }
});

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


  const container = document.querySelector('#container');
  container.appendChild(userList);
  addUserEventListeners();
}

const displayUserProfile = async (uid: string) => {
  try {
    const messagesRef = collection(db, uid);
    const querySnapshot = await getDocs(query(messagesRef, orderBy('timestamp', 'desc')));

    const messagesDiv = document.querySelector('#messages');
    messagesDiv.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.innerHTML = `
      <img src=${(data.userImage == '/images/1.png') ? '1.3d884485.png' : '' (data.userImage == '/images/2.png') ? '2.39edb27f.png' : '' (data.userImage == '/images/3.png') ? '3.5468cb7d' : ''}></img>
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

async function deleteAccount() {
  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await deleteDoc(userDocRef);
      await deleteUser(currentUser);
      console.log('User account deleted successfully.');
      location.reload();
    } else {
      console.log('No user is currently logged in.');
    }
  } catch (error) {
    console.error('Error deleting user account:', error);
  }
}

const deleteBtn = document.querySelector('#deleteBtn');
deleteBtn.addEventListener('click', deleteAccount);
