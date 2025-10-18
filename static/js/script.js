document.addEventListener("DOMContentLoaded", () => {
    const analyzeButton = document.getElementById("analyze-button");
    const textInput = document.getElementById("text-input");
    const resultContainer = document.getElementById("result-container");
    const resultBox = document.getElementById("result-box");
    const confidenceScore = document.getElementById("confidence-score");

    analyzeButton.addEventListener("click", async () => {
        const text = textInput.value;

        if (!text.trim()) {
            alert("Please enter some text to analyze.");
            return;
        }

        // --- Provide visual feedback during API call ---
        analyzeButton.disabled = true;
        analyzeButton.classList.add("analyzing-text");
        analyzeButton.textContent = "Analyzing";

        // Hide previous results
        resultContainer.style.display = "none";
        resultBox.className = "text-2xl font-bold"; // Reset classes

        try {
            const response = await fetch("/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: text })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `HTTP error! Status: ${response.status}`);
            }

            // --- Update UI with the result ---
            resultContainer.style.display = "block";
            resultBox.textContent = data.result;
            confidenceScore.textContent = `Confidence: ${data.confidence}%`;

            if (data.result === "Spam") {
                resultBox.classList.add("spam-result");
            } else {
                resultBox.classList.add("ham-result");
            }

        } catch (error) {
            console.error("Analysis Error:", error);
            resultContainer.style.display = "block";
            resultBox.textContent = "Analysis Failed";
            resultBox.classList.add("spam-result"); 
            confidenceScore.textContent = error.message;
        } finally {
            analyzeButton.disabled = false;
            analyzeButton.classList.remove("analyzing-text");
            analyzeButton.textContent = "Analyze Text";
        }
    });
});
