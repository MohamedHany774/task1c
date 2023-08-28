const testimonials = [
    {
      image: "testimonial-1.jpg",
      text: "Excellent product and great service! Highly recommended!",
      name: "Mohamed"
    },
    {
      image: "testimonial-2.jpg",
      text: "I'm really impressed with the quality. Will buy again!",
      name: "Ahmed"
    },
    {
      image: "testimonial-3.jpg",
      text: "This exceeded my expectations. Very satisfied with my purchase.",
      name: "mido"
    },
    {
      image: "person_3.jpg",
      text: "Thanks",
      name: "omar"
    },
    {
      image: "person_4.jpg",
      text: "exceeded my expectations.",
      name: "joe"
    }
  ];

  function getRandomTestimonial() {
    return testimonials[Math.floor(Math.random() * testimonials.length)];

  }

  function updateTestimonial() {
    const randomTestimonial = getRandomTestimonial();
    document.getElementById("testimonialText").textContent = randomTestimonial.text;
    document.getElementById("customerName").textContent = `- ${randomTestimonial.name}`;
    document.getElementById("testimonial-image").src = randomTestimonial.image;
  }

  updateTestimonial(); 