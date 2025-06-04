function calculatePercentage(event) {
  event.preventDefault();
  const cgpa = parseFloat(document.getElementById('cgpa').value);
  const result = document.getElementById('result');

  if (cgpa < 0 || cgpa > 10 || isNaN(cgpa)) {
    result.textContent = "Please enter a valid CGPA between 0 and 10.";
    result.style.color = '#d32f2f';
    return;
  }

  const percentage = ((cgpa - 0.75) * 10).toFixed(2);
  result.style.color = '#00796b';
  result.textContent = `Your Percentage is: ${percentage}%`;
}