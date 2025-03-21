const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    const response = await fetch("https://sriram-khandavilli-destion-products.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      navigate("/login");
    } else {
      setError(data.message || "Signup failed");
    }
  } catch (error) {
    setError("An error occurred. Please try again.");
  }
};
