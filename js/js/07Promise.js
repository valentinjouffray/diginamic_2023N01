function getToken() {
  // renvoie une promesse
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // Cas favorable
        resolve("DOQSDFOSDFIJSDIUFPOSDFP");
      } else {
        // cas défavorable
        reject(new Error("Pb de token"));
      }
    }, 1000);
  })
}

function getUser(token) {
  // renvoie une promesse
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // Cas favorable
        resolve({ name: "Dupond", uid: 158 });
      } else {
        // cas défavorable
        reject(new Error("Pb de récupération de l'utilisateur"));
      }
    }, 1000);
  })
}


/* getToken()
  .then((token) => {
    console.log(`token`, token);
    return getUser(token);
  })
  .then((result)=>{
    console.log(`token`, result[1]);
    console.log(`user`, result[0]);
  })
  .catch(error => {
    console.error(`Erreur attrapée`, error);
  }); */

  async function getTokenAndUser () {
    try {
      const token = await getToken();
      const user = await getUser(token);
      console.log(`token - user`, token, user);
    } catch (error) {
      console.error(`Erreur attrapée : `, error);
    }
  }
  getTokenAndUser();

