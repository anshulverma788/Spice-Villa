  document.addEventListener('DOMContentLoaded', function () {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            hamburger.onclick = () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            };

            const heroImage = document.getElementById('heroImage');
            const heroImages = [
                "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
                "https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0",
                "https://cdn.pixabay.com/photo/2022/03/19/12/33/side-dish-7078451_1280.jpg"
            ];
            let currentHero = 0;
            setInterval(() => {
                currentHero = (currentHero + 1) % heroImages.length;
                heroImage.src = heroImages[currentHero];
            }, 6000);

            const galleryPhotos = [
                "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75oqEsVn2OYLvdjAOnHbdhZcc_j3F9YSUcg&s",
                "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D",
                "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
                "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg",
                "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg",
                "https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg",
                "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg",
                "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg",
                "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
                "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg",
                "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg",
                "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
            ];
            const galleryGrid = document.getElementById('galleryGrid');
            galleryPhotos.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = "SpiceVilla food gallery photo";
                img.loading = "lazy";
                galleryGrid.appendChild(img);
            });
        });

        // Form submission handling
        document.getElementById("foodOrderForm").addEventListener("submit", function (e) {
            e.preventDefault(); 

            const name = document.getElementById("name").value;
            const dish = document.getElementById("dish").value;
            const quantity = document.getElementById("quantity").value;

            alert(`Thank you, ${name}!\nYou have ordered ${quantity} x ${dish}.\nWe will deliver it soon!`)
            this.reset();
        });

