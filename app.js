let posts = [
  {
      "title": "10 Tips for Healthy Living",
      "description": "Discover practical tips to enhance your overall well-being, from nutrition to exercise.",
      "image": "https://via.placeholder.com/600x400?text=Healthy+Living"
  },
  {
      "title": "The Ultimate Guide to Remote Work",
      "description": "Explore the best practices for staying productive while working from home.",
      "image": "https://via.placeholder.com/600x400?text=Remote+Work"
  },
  {
      "title": "Top 5 Travel Destinations for 2024",
      "description": "Get inspired by the most exciting places to visit this coming year.",
      "image": "https://via.placeholder.com/600x400?text=Travel+Destinations"
  },
  {
      "title": "How to Start a Successful Blog",
      "description": "Step-by-step advice on launching your own blog and attracting readers.",
      "image": "https://via.placeholder.com/600x400?text=Start+a+Blog"
  },
  {
      "title": "The Art of Minimalism",
      "description": "Learn how to simplify your life and embrace minimalism in your daily routine.",
      "image": "https://via.placeholder.com/600x400?text=Minimalism"
  },
  {
      "title": "Exploring Plant-Based Diets",
      "description": "Understand the benefits of plant-based eating and how to get started.",
      "image": "https://via.placeholder.com/600x400?text=Plant-Based+Diets"
  },
  {
      "title": "DIY Home Decor Ideas",
      "description": "Creative and budget-friendly DIY projects to enhance your living space.",
      "image": "https://via.placeholder.com/600x400?text=DIY+Home+Decor"
  },
  {
      "title": "The Benefits of Meditation",
      "description": "A comprehensive look at how meditation can improve your mental health.",
      "image": "https://via.placeholder.com/600x400?text=Meditation"
  },
  {
      "title": "Mastering Time Management",
      "description": "Effective strategies to manage your time better and increase productivity.",
      "image": "https://via.placeholder.com/600x400?text=Time+Management"
  },
  {
      "title": "Fitness Trends to Watch",
      "description": "Stay updated on the latest fitness trends that can enhance your workout routine.",
      "image": "https://via.placeholder.com/600x400?text=Fitness+Trends"
  },
  {
      "title": "Essential Photography Tips for Beginners",
      "description": "Learn the basics of photography and start capturing stunning images.",
      "image": "https://via.placeholder.com/600x400?text=Photography+Tips"
  },
  {
      "title": "Exploring Sustainable Fashion",
      "description": "A guide to making eco-friendly choices in your wardrobe.",
      "image": "https://via.placeholder.com/600x400?text=Sustainable+Fashion"
  },
  {
      "title": "The Impact of Social Media on Mental Health",
      "description": "Analyzing the pros and cons of social media usage on our well-being.",
      "image": "https://via.placeholder.com/600x400?text=Social+Media+Impact"
  },
  {
      "title": "Gardening for Beginners",
      "description": "Get started with gardening and learn how to grow your own plants.",
      "image": "https://via.placeholder.com/600x400?text=Gardening"
  },
  {
      "title": "Navigating Career Changes",
      "description": "Tips and advice for making a successful transition in your career.",
      "image": "https://via.placeholder.com/600x400?text=Career+Changes"
  },
  {
      "title": "Coping with Stress in Everyday Life",
      "description": "Effective techniques to manage stress and improve your mental resilience.",
      "image": "https://via.placeholder.com/600x400?text=Stress+Management"
  },
  {
      "title": "Understanding Cryptocurrency",
      "description": "A beginner's guide to cryptocurrency and how it works.",
      "image": "https://via.placeholder.com/600x400?text=Cryptocurrency"
  },
  {
      "title": "Top Apps for Productivity",
      "description": "A roundup of the best apps to boost your productivity and organization.",
      "image": "https://via.placeholder.com/600x400?text=Productivity+Apps"
  },
  {
      "title": "The Future of Artificial Intelligence",
      "description": "Insights into how AI is shaping our world and what to expect next.",
      "image": "https://via.placeholder.com/600x400?text=Artificial+Intelligence"
  }
]





let resultDiv = document.querySelector(".resultDiv")
let searchInput = document.querySelector("#searchInput")



function displayCard(postsDisplay) {

  resultDiv.innerHTML = ""

  postsDisplay.forEach((post) => {

      resultDiv.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src=${post.image} class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title">${post.title}</h5>
       <p class="card-text">${post.description}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
      </div>
     `

  })

}


displayCard(posts)


searchInput.addEventListener("input",(e)=>{    

 let searchTerm = e.target.value.toLowerCase()

 let filteredPost = posts.filter((post)  => post.title.toLowerCase().includes(searchTerm))
 displayCard(filteredPost)

})