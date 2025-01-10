// Design a Rate Limiter
// Problem: Implement a rate limiter that limits the number of API calls from a single user in a given time window.

// Required Time Complexity: O(1) for each API call check.
class RateLimiter {
  timeFrame = 3 * 1000;
  maxNumber = 3;
  userCache: Map<string, number[]> = new Map();

  get(userName: string): string {
    const currentTime = new Date().getTime();
    const record = this.userCache.get(userName);
    if (record) {
      if (record.length >= this.maxNumber) {
        if (record[0] + this.timeFrame > currentTime) {
          return "Error 429";
        } else {
          record.splice(0, 1);
        }
      }
      record.push(currentTime);
      this.userCache.set(userName, record);
    } else {
      this.userCache.set(userName, [currentTime]);
    }
    return "Success";
  }
}

const limiter = new RateLimiter();
setTimeout(() => {
  console.log('limiter.get("raul")', limiter.get("raul"));
  console.log("1", limiter.userCache);
}, 100);
setTimeout(() => {
  console.log('limiter.get("raul")', limiter.get("raul"));
  console.log("2", limiter.userCache);
}, 100);
setTimeout(() => {
  console.log('limiter.get("raul")', limiter.get("raul"));
  console.log("3", limiter.userCache);
}, 100);

setTimeout(() => {
  console.log('limiter.get("raul")', limiter.get("raul"));
  console.log("expected fail", limiter.userCache);
}, 100);

setTimeout(() => {
  console.log(new Date().getTime());
  console.log("4", limiter.get("raul"));
  console.log("limiter.userCache", limiter.userCache);
  console.log("5", limiter.get("raul"));
  console.log("limiter.userCache", limiter.userCache);
}, limiter.timeFrame + 100);
