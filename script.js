document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const summary = formData.get('summary');
    
    const resumeContent = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Summary:</strong> ${summary}</p>
    `;
    
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').classList.remove('hidden');
});
