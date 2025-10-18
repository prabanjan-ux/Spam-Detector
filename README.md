# Spam Detector AI 🤖

A web application that uses a Naive Bayes machine learning model to classify text as either "Spam" or "Ham" (not spam).

![App Screenshot](screenshots/UI.png)


## ✨ Features

-   **Real-time Analysis:** Paste any text (email, SMS, etc.) and get an instant prediction.
-   **Confidence Score:** See the model's confidence in its prediction.
-   **Clean UI:** Simple and intuitive interface built with Flask and Tailwind CSS.
-   **Preprocessing:** Includes text cleaning steps like lowercasing, removing stopwords, and lemmatization for better accuracy.

---

## 🛠️ Technologies Used

-   **Backend:** Python, Flask
-   **Machine Learning:** Scikit-learn, Pandas, NLTK
-   **Frontend:** HTML, Tailwind CSS, JavaScript

---

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/prabanjan-ux/spam-detector.git
    cd spam-detector
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # For Windows
    python -m venv venv
    venv\Scripts\activate

    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the Flask application:**
    ```bash
    flask run
    ```

5.  Open your browser and go to `http://127.0.0.1:5000`

---