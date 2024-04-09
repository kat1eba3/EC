document.addEventListener("DOMContentLoaded", function() {
    const colorBoxes = document.querySelectorAll('.color-box');
    const jsonData = [
        {
            "colorSchemeComplemantaryNeuralEtc": "Neutral with accent",
            "colorsOfOutfit": "deep red, yellow, cool toned brown, white",
            "moodOfOutfitBoldCalmEtc": "confident",
            "hexCode": "#8D1B26, #7D6862, #FDFDD5, #E1E0F1",
            "rating": "8.2/10",
            "imagePath": "IMGS/EC_1.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "grey, black",
            "moodOfOutfitBoldCalmEtc": "calm",
            "hexCode": "#5D6171, #151920",
            "rating": "8.5/10",
            "imagePath": "EC/IMGS/EC_2.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Analogous, Complementary",
            "colorsOfOutfit": "1) white, grey yellow, blue  2) salmon orange, blue",
            "moodOfOutfitBoldCalmEtc": "eccentric",
            "hexCode": "FFAB96, B6CCE9",
            "rating": "5.5/10",
            "imagePath": "/EC/IMGS/EC_3.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Analogous with accents",
            "colorsOfOutfit": "black, neon green, white, purple, yellow",
            "moodOfOutfitBoldCalmEtc": "playful",
            "hexCode": "0F0E13, F9F9F9, 92D027",
            "rating": "6.8/10",
            "imagePath": "/EC/IMGS/EC_4.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Complementary",
            "colorsOfOutfit": "blue, red, white ",
            "moodOfOutfitBoldCalmEtc": "bold",
            "hexCode": "578CF2, D70C1F, F2F4FF",
            "rating": "2024-09-10T04:00:00.000Z",
            "imagePath": "/EC/IMGS/EC_5.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "pink, white",
            "moodOfOutfitBoldCalmEtc": "artsy, sophisticated",
            "hexCode": "F0DFFC, E5EBEE",
            "rating": "7.8/10",
            "imagePath": "/EC/IMGS/EC_6.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Complementary, neutral",
            "colorsOfOutfit": "1) yellow, blue 2)grey, beige ",
            "moodOfOutfitBoldCalmEtc": "1) casual 2) casually sophisticated ",
            "hexCode": "EAE4B7, 1F7CB6, 4A506F, EEE2E0",
            "rating": "7.2/10",
            "imagePath": "/EC/IMGS/EC_7.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "warm yellow brown, brick orange, grapefruit orange",
            "moodOfOutfitBoldCalmEtc": "playful, ecclectic, sophisticated",
            "hexCode": "DD6F5B, C8874A, BE5341",
            "rating": "7.5/10",
            "imagePath": "/EC/IMGS/EC_8.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "1) blue, dark blue, bright blue 2) black, light grey",
            "moodOfOutfitBoldCalmEtc": "playful, bold",
            "hexCode": "7E96B9, 3E444B, 35363B, C11E49, C9CFDB",
            "rating": "8.8/10",
            "imagePath": "/EC/IMGS/EC_9.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "black",
            "moodOfOutfitBoldCalmEtc": "minimalistic ",
            "hexCode": "1E1D26",
            "rating": "7/10",
            "imagePath": "/EC/IMGS/EC_10.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "complementary ",
            "colorsOfOutfit": "bright green, dark blue ",
            "moodOfOutfitBoldCalmEtc": "eccentric",
            "hexCode": "97E385, 151D3F",
            "rating": "6.5/10",
            "imagePath": "/EC/IMGS/EC_11.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "neutral",
            "colorsOfOutfit": "brown, blue, red, yellow",
            "moodOfOutfitBoldCalmEtc": "calm, casual",
            "hexCode": "C8B5B0, FCFCFC, 5796B5, DEC298, 5C5860, FD8775, B5CBD8",
            "rating": "8.4/10",
            "imagePath": "/EC/IMGS/EC_12.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "neutral",
            "colorsOfOutfit": "browm, light orangish brown",
            "moodOfOutfitBoldCalmEtc": "calm",
            "hexCode": "663836, BD856C",
            "rating": "6.8/10",
            "imagePath": "/EC/IMGS/EC_13.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "black, blue ",
            "moodOfOutfitBoldCalmEtc": "casual, minimilastic ",
            "hexCode": "65463,91AAB8",
            "rating": "7.3/10",
            "imagePath": "/EC/IMGS/EC_14.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Analogous with accents",
            "colorsOfOutfit": "light pink, blue",
            "moodOfOutfitBoldCalmEtc": "casual, chic",
            "hexCode": "EEDAE6, 64A8DF",
            "rating": "8.6/10",
            "imagePath": "/EC/IMGS/EC_15.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "blue and light yellow",
            "moodOfOutfitBoldCalmEtc": "retro",
            "hexCode": "2B83BC, EEDDB9",
            "rating": "8.9/10",
            "imagePath": "/EC/IMGS/EC_16.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic",
            "colorsOfOutfit": "taupe",
            "moodOfOutfitBoldCalmEtc": "elegant, playful",
            "hexCode": "CB9F71",
            "rating": "6.9/10",
            "imagePath": "/EC/IMGS/EC_17.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "triadic",
            "colorsOfOutfit": "olive, black, white",
            "moodOfOutfitBoldCalmEtc": "casual",
            "hexCode": "D7D2DB, 171B25, B4A775, B2BDC7",
            "rating": "7.3/10",
            "imagePath": "/EC/IMGS/EC_18.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "analogous with accents",
            "colorsOfOutfit": "light blue, green, purple, pink",
            "moodOfOutfitBoldCalmEtc": "ecclectic",
            "hexCode": "A8C4EC, BB99F5, 4A8C68, FDD693",
            "rating": "6.2/10",
            "imagePath": "/EC/IMGS/EC_19.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "complementary with analogous accents",
            "colorsOfOutfit": "red, grey, turquouse, orange",
            "moodOfOutfitBoldCalmEtc": "edgy",
            "hexCode": "E96279, C9B7A9, 87A09A, 3E484A",
            "rating": "8.4/10",
            "imagePath": "/EC/MGS/EC_20.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "Monochromatic with accent",
            "colorsOfOutfit": "black, pink",
            "moodOfOutfitBoldCalmEtc": "whimsical, playful",
            "hexCode": "32373F, FFE1FD",
            "rating": "9.2/10",
            "imagePath": "/EC/IMGS/EC_21.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "analogous with accents",
            "colorsOfOutfit": "green, brown, yellow, blue",
            "moodOfOutfitBoldCalmEtc": "bold, casual",
            "hexCode": "15BE5F, 624439, A1CDF3, AB3636, 272B35",
            "rating": "8.4/10",
            "imagePath": "/EC/IMGS/EC_22.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "triadic",
            "colorsOfOutfit": "white, light orange brown, blue",
            "moodOfOutfitBoldCalmEtc": "casual",
            "hexCode": "B98D65, E3E1DF, 90A7B3",
            "rating": "8.2/10",
            "imagePath": "/EC/IMGS/EC_23.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "analogous",
            "colorsOfOutfit": "navy, brown, light grey",
            "moodOfOutfitBoldCalmEtc": "elegant, minimalistic",
            "hexCode": "95656F, 394C79, DEE3E2",
            "rating": "7.8/10",
            "imagePath": "/EC/IMGS/EC_24.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "analogous",
            "colorsOfOutfit": "orange, brown, off white",
            "moodOfOutfitBoldCalmEtc": "artsy",
            "hexCode": "F09A61, 92574B, EAEAE1, 838889, BCAC9C, 2E3643",
            "rating": "8.3/10",
            "imagePath": "/EC/IMGS/EC_25.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "split complementary",
            "colorsOfOutfit": "black, blue, rustic orange, white",
            "moodOfOutfitBoldCalmEtc": "artsy",
            "hexCode": "A15743, 0D1522, 264F84, 6E1234, CDE4FD",
            "rating": "6.4/10",
            "imagePath": "/EC/IMGS/EC_26.png"
        },
        {
            "colorSchemeComplemantaryNeuralEtc": "tetradic",
            "colorsOfOutfit": "white, black, dark blue, pink",
            "moodOfOutfitBoldCalmEtc": "playful, eccentric, casual",
            "hexCode": "F1F6FF, 343346, 1755B3, FFDAFF",
            "rating": "7.2/10",
            "imagePath": "/EC/IMGS/EC_27.png"
        }
    ]
    
    

    // Create text data popup
    const dataTextBox = document.createElement('div');
    dataTextBox.id = 'dataTextBox';
    dataTextBox.classList.add('data-textbox');
    dataTextBox.style.display = 'none'; // Hide the data textbox initially
    document.body.appendChild(dataTextBox);

    // Create second text popup
    const secondTextBox = document.createElement('div');
    secondTextBox.id = 'secondTextBox';
    secondTextBox.classList.add('data-textbox');
    secondTextBox.style.display = 'none'; // Hide the second textbox initially
    document.body.appendChild(secondTextBox);

    let clickCount = 0; // Variable to track the number of clicks

    // Add event listener to color boxes
    colorBoxes.forEach((colorBox, index) => {
        colorBox.addEventListener('click', function() {
            if (clickCount % 2 === 0) {
                // If click count is even, show second textbox
                const data = jsonData[index];
                showSecondTextBox(data, index); // Pass the index to showSecondTextBox function
            } else {
                // If click count is odd, do nothing
            }
        });
    });

    // Add event listener to second textbox
    secondTextBox.addEventListener('click', function() {
        if (clickCount % 2 === 1) {
            // If click count is odd, show first textbox
            showDataType(secondTextBox.dataset.jsonIndex); // Use secondTextBox.dataset.jsonIndex
        }
    });

    // Add event listener to first textbox
    dataTextBox.addEventListener('click', function() {
        hideTextboxes();
    });

    function showDataType(index) {
        const data = jsonData[index];
        dataTextBox.innerHTML = `
            <div class="data-item">
                <p><strong>Color Scheme:</strong> ${data.colorSchemeComplemantaryNeuralEtc}</p>
                <p><strong>Colors of Outfit:</strong> ${data.colorsOfOutfit}</p>
                <p><strong>Mood of Outfit:</strong> ${data.moodOfOutfitBoldCalmEtc}</p>
                <p><strong>Hex Code:</strong> ${data.hexCode}</p>
                <p><strong>Rating:</strong> ${data.rating}</p>
            </div>
        `;
        dataTextBox.style.display = 'block'; // Show the data textbox
        secondTextBox.style.display = 'none'; // Hide the second textbox
        clickCount = 0; // Reset click count after hiding textboxes
    }

    function showSecondTextBox(data, index) {
        secondTextBox.innerHTML = `
            <div class="data-item">
                <img src="${data.imagePath}" alt="Outfit Image" style="max-width: 100%; height: auto; display: block; margin: 10px auto;">
                <!-- Add additional content or data here if needed -->
            </div>
        `;
        secondTextBox.style.display = 'block'; // Show the second textbox
        dataTextBox.style.display = 'none'; // Hide the first textbox
        secondTextBox.dataset.jsonIndex = index; // Store the index of data in the second textbox
        clickCount++; // Increment click count
    }

    function hideTextboxes() {
        dataTextBox.style.display = 'none'; // Hide the data textbox
        secondTextBox.style.display = 'none'; // Hide the second textbox
        clickCount = 0; // Reset click count
    }

    
    
    
});
