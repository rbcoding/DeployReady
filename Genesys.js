//call Genesys API and output to the console
fetch('https://status.mypurecloud.com/api/v2/components.json')
    .then (response => response.json())
    .then(data => {
      console.log(data.page.url);
      for (let i = 0; i < data.components.length; i++)
        {
          var loc = data.components[i].name
          var stat = data.components[i].status
          if(stat != "operational")
            {console.log("Site not operational ->",loc)}
         console.log(loc,"->",stat)
         }
    })