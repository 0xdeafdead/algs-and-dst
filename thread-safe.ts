// Implement a Thread-safe Singleton
// Problem: Design a thread-safe singleton in TypeScript.
// Required Time Complexity: O(1).

class Singleton {
  private static instance: Singleton;
  cosntructor() {}

  getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
