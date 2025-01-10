// Implement a URL Shortener
// Problem: Design a URL shortener with encode and decode methods.

// Required Time Complexity: O(1).

class UrlShortner {
  private baseUrl = "https://shortUrl.com/";
  private urls = new Map<string, string>();
  private counter = 0;
  shortUrl(url: string): string {
    const shortUrl = (this.baseUrl += this.counter++);
    this.urls.set(shortUrl, url);
    return shortUrl;
  }

  decodeUrl(shortUrl: string) {
    return this.urls.get(shortUrl);
  }
}
const shortner = new UrlShortner();
const encoded = shortner.shortUrl("https://google.com?testing=12&damp=4");
console.log("encoded", encoded);
const decoded = shortner.decodeUrl(encoded);
console.log("decoded", decoded);
