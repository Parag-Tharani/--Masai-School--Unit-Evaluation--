const express = require("express");
const dns = require("dns")


async function getmeIP(req,res){
    let website_data = req.body;
    const website_name = website_data.website_name

    
    dns.resolve4(website_name, (err, addresses) => {
        
        if (err) {
          console.log(err);
          return;
        }

        res.send("Your IP Address is: " + addresses[0]); 
      });
}


module.exports = getmeIP