const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

        const button = document.getElementById('btn');

        button.addEventListener('click', () => {
        
            const randomIndex = Math.floor(Math.random() * colors.length);
            const selectedColor = colors[randomIndex];
            document.body.style.backgroundColor = selectedColor; 
        });