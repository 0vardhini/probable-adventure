
let i;
//let gederS = document.getElementById("gender");
let AgeYear = document.getElementById("AgeYear");
let currYear = (new Date()).getFullYear();

for (i = 1945; i <= currYear; i++)
{
    let option = document.createElement("option");
    option.innerHTML = i;
    option.value = i;
    AgeYear.appendChild(option);
        
}

let displayMessage = function (message)
{
    document.querySelector('.message').textContent = message;
    
};
 
document.querySelector('.sub').addEventListener('click', function mainFunction()
{
    
   let selectEleYear = document.querySelector('#AgeYear');
   Aoutput = selectEleYear.value;
   let selectGender = document.querySelector('#gender');
  Goutput = selectGender.value;
  
if (Aoutput <= 1964)
{
   if (Goutput == 'M')
   {
    displayMessage("France, Italy, Spain, and Portugal are the most attractive destinations for people over the age of 65. Europe is the first choice for boomers when travelling internationally,Within Europe, Germany, The United Kingdom, The Netherlands, and Belgium have the most promising opportunities to be source markets for baby boomer travel, But Singapore’s capital city ranked as the best for baby boomers thanks to the number of green spaces. According to Holidu, in 2020, 46.5% of the city’s land was covered in green space, making it one of the greenest cities in the world");           
   } else if (Goutput == 'F')
   {
     displayMessage("Older women and seniors with mobility challenges can be even more vulnerable and these are countries that can accomdate these vulnerbilities. The city-state of Singapore holds the best ranking in the Women’s Danger Index of any other country in Asia. Among other metrics, the Women’s Danger Index measures the rates of street safety, sexual violence, and intentional homicide,Canada has a longstanding reputation for being the safest country in North America.The Global Peace Index has once again ranked Iceland as the most peaceful country in the world with its low crime rate");  
   } else if (Goutput == 'O')
   {
     displayMessage("According to the LGBTQ+ Travel Safety Index, Brunei is the most dangerous country for gay travelers in 2023, followed by Saudia Arabia and Nigeria. In 2019, Brunei passed a penal code that made homosexual acts punishable by death by stoning. Nigeria and Saudi Arabia still utilize the death penalty as a possible punishment for being LGBTQ+, while lesser punishments can include lashings, flogging or life in prison.Belgium has an active LGBTQ+ community, with Brussels hosting the country's most colourful event of the year, Brussels Pride Week, in late spring.Malta is often considered a leader in LGBTQ+ rights in Europe, with significant progress made in recent years to ensure the safety and protection of the LGBTQ+ community. Sun-beamed Spain is one of Europe’s most culturally liberal destinations, especially for LGBTQ+ globetrotters. "); 
   }
   else
   {
     displayMessage("Wrong Entry");
   }  
}
else if (Aoutput <= 1978)
  {
    if (Goutput == 'M')
    {
      displayMessage("Italy is always a popular destination and we are seeing families with kids wanting to educate their children and learn more about history, art, culture and food,” says Jill Taylor of Jet Set World Travel, Inc. in Chicago. “London and the UK is popular with soccer fans and a lot of families partner it with Paris.“For spring break, we are seeing more Mexico, Turks and Caicos and Jamaica,” Taylor adds. “Africa is on the radar now. There are great malaria-free areas in South Africa that allow kids to have an amazing safari experience without having to take the malaria medication or to take the risk.");
    
    } else if (Goutput == 'F')
    {
      displayMessage("The city-state of Singapore holds the best ranking in the Women’s Danger Index of any other country in Asia. Among other metrics, the Women’s Danger Index measures the rates of street safety, sexual violence, and intentional homicide,Canada has a longstanding reputation for being the safest country in North America.The Global Peace Index has once again ranked Iceland as the most peaceful country in the world with its low crime rate");  
    } else if (Goutput == 'O')
    {
       displayMessage("According to the LGBTQ+ Travel Safety Index, Brunei is the most dangerous country for gay travelers in 2023, followed by Saudia Arabia and Nigeria. In 2019, Brunei passed a penal code that made homosexual acts punishable by death by stoning. Nigeria and Saudi Arabia still utilize the death penalty as a possible punishment for being LGBTQ+, while lesser punishments can include lashings, flogging or life in prison.Belgium has an active LGBTQ+ community, with Brussels hosting the country's most colourful event of the year, Brussels Pride Week, in late spring.Malta is often considered a leader in LGBTQ+ rights in Europe, with significant progress made in recent years to ensure the safety and protection of the LGBTQ+ community. Sun-beamed Spain is one of Europe’s most culturally liberal destinations, especially for LGBTQ+ globetrotters. "); 
    }
    else
    {
      displayMessage("Wrong Entry");
    }
  }
else if (Aoutput <= 1996)
  {
    if (Goutput == 'M')
    { 
      displayMessage("Millennials interested in physical activities will want to go to Charlevoix, Quebec, Canada. Some millennials also want to visit Florida or California say they want to go to Disney World or Disneyland. Paris took the top spot. The French city is home to some of the world’s most iconic landmarks and has been hashtagged over 137 million times on Instagram.The French capital also has two dishes on the top 100 best national dishes and is where you can visit one of the happiest places on Earth — Disneyland Paris.");  
    } else if (Goutput == 'F')
    {
      displayMessage("The safest countries to solo female travel Africa are Botswana and Eswatini, but if you’re planning to visit more than one country, consider an overland group tour. The best countries to drive through are Morocco, Botswana, Mozambique and Eswatini.  UAE is a safe place to travel as a solo female. Dubai is listed as the third safest city for solo female travel. Abu Dhabi is ranked as the safest city in the Middle East, and research has shown that UAE has the highest percentage of women who feel safe in their communities."); 
    } else if (Goutput == 'O')
    {
       displayMessage("According to the LGBTQ+ Travel Safety Index, Brunei is the most dangerous country for gay travelers in 2023, followed by Saudia Arabia and Nigeria. In 2019, Brunei passed a penal code that made homosexual acts punishable by death by stoning. Nigeria and Saudi Arabia still utilize the death penalty as a possible punishment for being LGBTQ+, while lesser punishments can include lashings, flogging or life in prison.Belgium has an active LGBTQ+ community, with Brussels hosting the country's most colourful event of the year, Brussels Pride Week, in late spring.Malta is often considered a leader in LGBTQ+ rights in Europe, with significant progress made in recent years to ensure the safety and protection of the LGBTQ+ community. Sun-beamed Spain is one of Europe’s most culturally liberal destinations, especially for LGBTQ+ globetrotters. "); 
    }
    else
    {
      displayMessage("Wrong Entry");
    }   
}
else if (Aoutput <= 2012)
  {
    if (Goutput == 'M')
    {
      displayMessage("Despite their youth and comparatively low income, Gen Zers are traveling — and they’re doing so frequently.This is a generation that also often does solo trips. Japan named safest country for solo travelers. Indonesia - Although the small island of Bali is the most famous destination, there is so much more to discover. The variety of cultures and landscapes within this country is astounding. Peninsular Malaysia is more developed, and more touristed, and includes the capital, Kuala Lumpur, along with other popular destinations, including Melaka and Penang.");

    } else if (Goutput == 'F')
    {
      displayMessage("Uruguay has some of the lowest crime rates in the Americas. For women wanting to visit South America, Uruguay is one of the region's safest countries to travel alone!  New Zealand to be the safest country for women in the world! It's without a doubt one of the world's safest countries for solo female travelers, and safest countries to backpack!  Chile has low crime rates and is ranked twenty fourth in the Global Peace Index.");
    } else if (Goutput == 'O')
    {
        displayMessage("According to the LGBTQ+ Travel Safety Index, Brunei is the most dangerous country for gay travelers in 2023, followed by Saudia Arabia and Nigeria. In 2019, Brunei passed a penal code that made homosexual acts punishable by death by stoning. Nigeria and Saudi Arabia still utilize the death penalty as a possible punishment for being LGBTQ+, while lesser punishments can include lashings, flogging or life in prison.Belgium has an active LGBTQ+ community, with Brussels hosting the country's most colourful event of the year, Brussels Pride Week, in late spring.Malta is often considered a leader in LGBTQ+ rights in Europe, with significant progress made in recent years to ensure the safety and protection of the LGBTQ+ community. Sun-beamed Spain is one of Europe’s most culturally liberal destinations, especially for LGBTQ+ globetrotters. "); 
    }
    else
    {
      displayMessage("Wrong Entry");  
    }
    
  } else
  {
  displayMessage("Not Applicable! You're a minor");  
  }
    
});

    
    

