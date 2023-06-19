class A {}
class B extends A {}
class C extends B {}
function logClasses(object) {
  while (object) {
    // Remonte la chaine des prototype
    object = Object.getPrototypeOf(object);
    if(object) console.log("classe : ", object.constructor.name);
  }

}
logClasses(new C());