<input type="text" id="magnitudeB" name="magnitudeB" readonly>
    </div>
    <div class="btn-group">
        <button onclick="calculate('dot')">Calculate Dot Product</button>
        <button onclick="calculate('cross')">Calculate Cross Product</button>
        <button onclick="calculate('angle')" title="your points must be valid to get the angle">Calculate Angle between A and B</button>
        <button onclick="clearInputs()">Clear Inputs</button>
    </div>

  
    <div id="result" class="result"></div>
    <div class="feedback-form">
        <h2>Feedback Form</h2>
        <form id="feedbackForm" onsubmit="submitForm(event)">
            <h4>i'm not able to receive your feedback for now use the email below or the phone number </h4>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"><br>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea><br>
            
            <input type="submit" value="Submit">
        </form>
        <div id="status"></div>
    </div>
    <br>
    <footer >
    <h3>Thank you for visiting my website. I am working on making it function better.</h3>
   
   <p>Last updated: 6:50 AM, 5 May 2024</p>
    <p>Creator: MAKANATLENG LG</p>
    <p>Phone: 0796798422</p>
    <p>Email: <a href="mailto:makanatlenggift98@gmail.com">makanatlenggift98@gmail.com</a></p>
    