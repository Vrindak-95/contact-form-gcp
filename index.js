exports.contactFormHandler = (req, res) => {
    if (req.method === 'OPTIONS') {
      // Handle CORS
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.status(204).send('');
      return;
    }
  
    res.set('Access-Control-Allow-Origin', '*');
    const { name, email, message } = req.body;
  
    console.log('Received contact form:', { name, email, message });
  
    res.status(200).send('Thank you for your message!');
  };
  