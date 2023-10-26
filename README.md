an HTTP request includes:

1. startline:
   {

- htpp method or an options
- The request target URL
- The authority component of URL (authority form)
- the last one is HTTP version
  //HEAD /test.html?query=alibaba HTTP/1.1

}.

2. Optinal set HTTP headers.
   the request headers use to provide more information about request so the server can tailor the response.
   EX: Accept-\* : indicate allowed prefered formats of the response.

3. A blank line.
4. body

- this is the final part,

An HTTP RESPONSE

1. status line
2. Headers
3. body

=============
A TYPICAL HTTP SESSION

consist of three phases"

1. - client established a TCP connection (or others) to server.
2. - client send its request, and waits for the answer.
3. - The server processes the request and sending back its answer with appropriate data.

=============
HTTP security
-Using CSP: config Content-Security-Policy Header to tell user-agent is allowed to load fror that page.

"Content-Security-Policy: policy.

2.  Stric-Transport-Security: inform browsers that the side should only be accessed using HTTPS

=============
HTTP cookies

- It's small piece of data that a server sends to a user's web browser. The browser may store the cookies and send it back to the same server with later requests.

- The cookie is used to tell if two requests come from the same browser - keeping a user logged in.
  -Create Cookies: After receiving an HTTP request, a server can send one or more Set-Cookie headers with the response.

- Lifetime of a cookie
  session cookies and Permanent cookies:
  -Cookies are stored in webstorage of client. and reuse later.

==============
X-Content-Type-Options: nosniff
"Block a request if the request destination is of type style and the MIME type is not text/css,

================
HTTP authentication

you know what, HTTP provdie a general framwarok for access control and authentication.
This page is an introduction to the HTTP framework for authentication.
and show how to restrict access to your server using the HTTP "basic" schema.

=====================
HTTP caching
stores a response associated with a request and reuses the stored response for subsequent requests.
- When a response is reusable, the origin server does not need to process the request.
- there are two main type of caches: private caches and shared caches.
Private caches: 
- 

