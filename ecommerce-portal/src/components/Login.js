const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    const response = await fetch("https://sriram-khandavilli-destion-products.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      login(data.token); // Assuming your backend returns a token
      navigate("/");
    } else {
      setError(data.message || "Login failed");
    }
  } catch (error) {
    setError("An error occurred. Please try again.");
  }
};
