/*-------THE DATA--------*/


//career data 
// career is a array with values object so career[0(index)]=Android developer with it's data
var careers=[
    //first track with it's skills
    {
        name : "Android Developer" ,
        communityLink : "https://chat.whatsapp.com/Dj6uW5IVg7K76JCPajNCC1" ,
        skills : [
            {name:"Programming Fundamentals" , level: "Basic"} ,
            {name: "OOP" , level: "Basic"} ,
            { name: "Data Structures", level: "Intermediate" },
            { name: "Algorithms", level: "Intermediate" },
            { name: "Kotlin", level: "Intermediate" },
            { name: "Android Fundamentals", level: "Advanced" }
        ]
    } ,

    //second track with it's skills
    {
        name : "iOS Developer" ,
        communityLink : "https://chat.whatsapp.com/Dj6uW5IVg7K76JCPajNCC1" ,
        skills : [
            {name:"Programming Fundamentals" , level: "Basic"} ,
            {name: "OOP" , level: "Basic"} ,
            { name: "Data Structures", level: "Intermediate" },
            { name: "Swift", level: "Intermediate" },
            { name: "iOS Fundamentals", level: "Advanced" }
        ] 
    } ,

    //the third
    {
        name: "Front-End Developer",
        communityLink: "https://chat.whatsapp.com/frontend",
        skills: [
            { name: "HTML", level: "Basic" },
            { name: "CSS", level: "Basic" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "React", level: "Advanced" }
        ]
    },

    //the fourth
    {
        name: "Back-End Developer",
        communityLink: "https://chat.whatsapp.com/backend",
        skills: [
            { name: "Programming Fundamentals", level: "Basic" },
            { name: "Databases", level: "Intermediate" },
            { name: "APIs", level: "Intermediate" },
            { name: "Node.js", level: "Advanced" }
        ]
    },

    //the fifth
    {
        name: "Data Analyst",
        communityLink: "https://chat.whatsapp.com/data",
        skills: [
            { name: "Excel", level: "Basic" },
            { name: "SQL", level: "Intermediate" },
            { name: "Python", level: "Intermediate" },
            { name: "Data Visualization", level: "Advanced" }
        ]
    },

    //The sixth
     {
        name: "UI/UX Designer",
        communityLink: "https://chat.whatsapp.com/uiux",
        skills: [
            { name: "Design Principles", level: "Basic" },
            { name: "Figma", level: "Intermediate" },
            { name: "User Research", level: "Intermediate" },
            { name: "Prototyping", level: "Advanced" }
        ]
    }

]

// Resources for each skill and link for it
var resources = {
    "Programming Fundamentals": [
        { name: "CS50", link: "https://cs50.harvard.edu" },
    ],
    "OOP": [
        { name: "OOP Basics with C++", link: "https://maharatech.gov.eg/course/view.php?id=2206" }
    ],
    "Data Structures": [
        { name: "GeeksForGeeks", link: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/" }
    ],
    "Algorithms": [
        { name: "Khan Academy", link: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/" }
    ],
    "Kotlin": [
        { name: "Kotlin Docs", link: "https://kotlinlang.org" }
    ],
    "Android Fundamentals": [
        { name: "Android Developers", link: "https://developer.android.com" }
    ],
    "HTML": [
        { name: "MDN HTML", link: "https://developer.mozilla.org" }
    ],
    "CSS": [
        { name: "MDN CSS", link: "https://developer.mozilla.org" }
    ],
    "JavaScript": [
        { name: "JavaScript.info", link: "https://javascript.info" }
    ],
    "React": [
        { name: "React Docs", link: "https://react.dev" }
    ],
    "Swift": [
        { name: "Swift Docs", link: "https://swift.org" }
    ],
    "iOS Fundamentals": [
        { name: "Apple Developer", link: "https://developer.apple.com" }
    ],
    "Databases": [
        { name: "SQL Tutorial", link: "https://www.w3schools.com/sql" }
    ],
    "APIs": [
        { name: "REST API Guide", link: "https://restfulapi.net" }
    ],
    "Node.js": [
        { name: "Node.js Docs", link: "https://nodejs.org" }
    ],
    "Excel": [
        { name: "Excel Easy", link: "https://www.excel-easy.com" }
    ],
    "SQL": [
        { name: "SQLBolt", link: "https://sqlbolt.com" }
    ],
    "Python": [
        { name: "Python.org", link: "https://python.org" }
    ],
    "Data Visualization": [
        { name: "Tableau", link: "https://www.tableau.com" }
    ],
    "Design Principles": [
        { name: "Design Basics", link: "https://www.canva.com/learn" }
    ],
    "Figma": [
        { name: "Figma", link: "https://figma.com" }
    ],
    "User Research": [
        { name: "NN Group", link: "https://www.nngroup.com" }
    ],
    "Prototyping": [
        { name: "Figma Prototyping", link: "https://figma.com" }
    ]
};


 


/*--------the LOGIN & REGISTER function ------------*/


/*to switch between the login page and Redister page*/
/*here iam in the login page*/
function showRegister() {
    document.querySelector('#registerPage').style.display="flex";
    document.querySelector('#loginPage').style.display="none";

}


/*to switch between the Redister page and login page*/
/*here iam in the register page*/
function showLogin (){
    document.querySelector('#registerPage').style.display="none";
    document.querySelector('#loginPage').style.display="flex";

}


var users=[]; /*for user info and password*/

/*sign as register*/
function register() {
    /*local variable */
    var name = document.querySelector("#regName").value;
    var user = document.querySelector("#regUser").value;
    var pass = document.querySelector("#regPass").value;
    var pass2 = document.querySelector("#regPass2").value;
    var error = document.querySelector("#regError");


     if (name === "" || user ==="" || pass ==="" )
     {
        error.textContent= "Please fill all fields";
        return;
     }

    if (pass !== pass2){
        error.textContent="Passwords do not match";
        return;
    } 


    for ( var i =0 ; i< users.length ; i++ ){

        if (users[i].Username === user ){ /*in first user this loop will not work beca i=0 user.length=0 so 0<0 false */
            error.textContent="Username already taken";
            return;
        }
    }


/*frist time the array users will define as the intvalue = object has attributes = name , username , password */
    users.push 
    (
        {name: name , Username: user , password:pass }

    );

    error.textContent ="";

    alert("Account created! Please login.");
    showLogin();
    /*use the function showlogin to bring the user back to login page to login with his username and password */

}

 //check the validation of Usename

var massuserinput = document.querySelector("#massuserinput");

     regUser.addEventListener("blur" , ()=>{
        if( regUser.value.length < 3)
        {
            regUser.value = ""; //delete what user write
           regUser.placeholder = "More than 3 letters"; //change placeholder to invalid mass
           regUser.classList.add("error");
        }
        else 
        {
            regUser.placeholder = "Username"; 
        }
        regUser.addEventListener("focus", ()=>{
        regUser.placeholder = "Username";
         regUser.classList.remove("error");
        });
    });

    var regPass = document.querySelector("#regPass");
        regPass.addEventListener("blur", () => {
        if (regPass.value.length < 4) 
        {
             regPass.value = "";
             regPass.placeholder = "More than 4 characters";
             regPass.classList.add("error");
        
        }
});

regPass.addEventListener("focus", () => {

    regPass.placeholder = "Password";
    regPass.classList.remove("error");

});


var currentUser = null ; /* this why the website can't save user info once the web is reload the past info disappear */

function Login() {
    var user  = document.querySelector("#loginUser").value;
    var pass = document.querySelector("#loginPass").value;
    var error = document.querySelector("#loginError");


    if ( user ==="" || pass ==="" )
     {
        error.textContent= "Please fill all fields";
        return;
     }
    

     for ( var i=0 ; i<users.length ; i++) 
     {
        if (users[i].Username === user && users[i].password === pass ) /*here to check if the username & pass are exict */
        {
            currentUser = users[i];
            error.textContent="";
            document.querySelector("#loginPage").style.display = "none"; /*to get off login page */
            document.querySelector("#chossecareer").style.display = "block"; /*to open the choose career page */
            return;

        }
     }


    error.textContent="Wrong username or password"; /*else the UN or pass not valid print this message */

}



/*-------------logout function-------------- */

/*logout button in the sidebar */
function logout() {
    /*to delet the info to we can log in again using diff UN & paa */
    currentUser =null;
    currentCareer =null;

    /*to close all pages and bring the user back to login page */
    document.querySelector("#dashboardPage").style.display="none";
    document.querySelector("#chossecareer").style.display="none";
    document.querySelector("#loginPage").style.display="flex";

    document.querySelector("#loginUser") .value="";
    document.querySelector("#loginPass").value="";

}


var currentCareer = null ; /*when the user choose career will  update the value */
 let userProgress = {};
    /*define a object that hold the info of spacific track it's attribute will be the names of skills and the values be it's state
    ex: userorogress{
       Programming Fundamentals: "current" ,
       OOP: locked ,.... }; */

/*use array careers that contain the tracks name and it's info */
function chooseCareer(careerName) {
    for(var i=0 ; i< careers.length ; i++)
    {
        if(careers[i].name === careerName ) /*to select the track user choose*/
        {
            currentCareer = careers[i]; /*now the currentcareer become a object form the objects inside careers
            ex: currentcareer  {
                    name : "Android Developer" ,
                    communityLink : "https://chat.whatsapp.com/Dj6uW5IVg7K76JCPajNCC1" ,
                    skill : [
                            {name:"Programming Fundamentals" , level: "Basic"} ,
                            {name: "OOP" , level: "Basic"} ,
                            { name: "Data Structures", level: "Intermediate" },
                            { name: "Algorithms", level: "Intermediate" },
                            { name: "Kotlin", level: "Intermediate" },
                            { name: "Android Fundamentals", level: "Advanced" }
                             ]
                                 }  */
            break;
        }
    }


    for( var o=0 ; o < currentCareer.skills.length ; o++) 
    {
        if(o === 0) //why ===0 to guarantee starting with the frist skill (basic)
        {
            userProgress[currentCareer.skills[o].name]="current"; //ex: the current skill to study is oop
        }

        else
        {
            userProgress[currentCareer.skills[o].name]="locked";
        }

    }


    // Switch to dashboard page
    document.querySelector("#chossecareer").style.display="none";
    document.querySelector("#dashboardPage").style.display="flex";


    var links=document.querySelectorAll(".sidebar a"); //will return all links in list called links
    for(var e=0 ; e < links.length; e++ )
    {
        links[e].classList.remove("active");
    }

    links[0].classList.add("active"); //class active change it's place with the link of sidebar i clicked , to make sure that link home is the active now

    document.getElementById("section-home").style.display = "block";
    document.getElementById("section-roadmap").style.display = "none";
    // document.getElementById("section-progress").style.display = "none";
    document.getElementById("section-resources").style.display = "none";
    document.getElementById("section-community").style.display = "none";


    loadDashboard();

}

//this function to reset the web as the track the user choose
function loadDashboard() {
    document.querySelector("#currentCareer").textContent=currentCareer.name;
    document.querySelector("#communityName").textContent=currentCareer.name + "Community";
    document.querySelector("#communityLink").href = currentCareer.communityLink;

    updateProgress();
    buildRoadmap();
    // buildProgressList();
    buildResources();
    findNextStep();

}




// ------------------IN ROADMAP PADE -------------------

        // <!--------------- ROADMAP SECTION ------------------>
        //     <div id="section-roadmap" style="display:none;" >
        //         <h1>My Roadmap</h1>
        //         <p class="tagline">Your learning journey</p>
        //         <div id="roadmapList"></div>    <!--here to but the current skill and button to mark as completed-->
        //     </div> 


// here to put the current skill and button to mark as completed
function buildRoadmap() {
    var container = document.querySelector("#roadmapList");
    container.innerHTML="";

    for(var i=0 ; i<currentCareer.skills.length ; i++)
    {
        var skill = currentCareer.skills[i] ; //skill = frist basic skill of the skills
        var state = userProgress[skill.name]; //userprogress was { "oop" : current ,....} اكني بقوله روح هات حاله المهاره الي اسمها كذا
        var div = document.createElement("div"); //now each skill have div contain the skillname and it's state

        div.className= "skill " + state ; //two classes one for style , js


        var info="";
        if(state === "done") //still in for loop
        {
            info = "✓ Completed";
        }

        else if (state==="current")
        {
            info = "◉ Current";
        }

        else if (state==="locked")
        {
            info = "🔒 Locked";
        }



        var button="";
        if(state==="current")
        {
            button = "<button onclick=\"markDone('" + skill.name + "')\">Mark Done</button>" //THE HTML <button onclick="markDone('Programming Fundamentals')">Mark Done</button>
        }



        /* for example: div =  OOP
                              Basic  .locked */


        div.innerHTML = "<div class='skill-info'>" +
                                "<h4>" + skill.name + "</h4>" +
                                "<p>" + skill.level + " • " + info + "</p>" +
                        "</div>" +
                                button ;


        container.appendChild(div);  //here to put the div inside the digger div called roadlist
        
        /*so now :   div=>class=roadmaplist
                         {
                          div=>class=skill & class=+state+(variable)
                             {
                               div=> class='skill-info' 
                                    <h4> + skill.name + </h4> 
                                    <p> + skill.level + " • " + info  </p> 
                
                                button ; outside the skill-info
                             }
                         }
                             
        
        */

    }

}

//to update the state when the button clicked 
function markDone(skillName) {
    userProgress[skillName] = "done";

 for (var i = 0; i < currentCareer.skills.length; i++)
 {
    if (currentCareer.skills[i].name === skillName) 
    {
         if (i + 1 < currentCareer.skills.length) //to access the next skill to update state
         {
            var nextSkill = currentCareer.skills[i + 1].name;
             if (userProgress[nextSkill] === "locked")
             {
                userProgress[nextSkill] = "current"; //change the state
             }
         }
         break;
    }
 }

    buildRoadmap();
    // buildProgressList();
    updateProgress();
    findNextStep();

    alert("Skill completed! 🎉"); 


}        

//THIS IN THE CHOOSE CAREER PAGE

// <div class="card"> <!--this is for shape of the card-->
//     <h3>Overall Progress</h3>
//     <div class="progress-bar"> <!--just the shape of the bar of progress-->
//          <div id="overallProgress" class="progress-fill"></div> <!--for the progress % -->
//     </div>
//     <p id="progressText">0%</p>
// </div>

// <!--overallProgress ===> to update the percent value after skill completed--> 


//------------------progress-------------

function updateProgress(){
    var total= currentCareer.skills.length; //all skills that follow the choosed track ex: track Android Developer so total=6
    var done =0; //the skills is completed

    for(var i=0 ; i<currentCareer.skills.length ; i++)
    {
        if(userProgress[currentCareer.skills[i].name] === "done") //how marke ia define here because i define it in the 
        {
            done++;
        }
    }
    
    var percent= Math.round((done / total)*100);
    document.querySelector("#overallProgress").style.width = percent + "%"; //يعني اتحرك بالنسبه ديه بالنسبه لشريط عرضه = 100%
    document.querySelector("#progressText").textContent = percent +"%"; //update the text

}



   /*     <!------------ RESOURCES SECTION ------------------>
            <div id="section-resources" style="display:none;">
                <h1>Resources</h1>
                <p class="tagline">Learning materials</p>
                <div id="resourcesList"></div> <!--to put the links of resoueces-->
            </div>
*/

function buildResources(){
    var container =document.querySelector("#resourcesList");
    container.innerHTML="";

    for(var i =0 ; i < currentCareer.skills.length; i++)
    {
        var skillName = currentCareer.skills[i].name;
        var list = resources[skillName];
        /* ex: skillName=Programming Fundamentals so the list  = [ { name: "CS50", link: "https://cs50.harvard.edu" },
                                                                  { name: "MaharaTech", link: "https://maharatech.gov.eg" }]
        */

        for(var a=0 ; a<list.length ; a++)
        {
            var div=document.createElement("div");
            div.className = "resource";
            div.innerHTML= "<h4>" + skillName + "</h4>" +
                            "<a href='" + list[a].link + "'target='_blank'>" + list[a].name + " →</a>";

              container.appendChild(div);

        }
    }
}



/*       <div class="card highlight"> <!--THIS div has 2 classes -->
             <h3>Your NextStep</h3>
             <p id="nextStep"></p> <!--to display the next skill must complete-->
             <button onclick="showSection('roadmap')">Continue Learning →</button>

        </div>    
*/

function findNextStep(){
    for(var i=0 ; i<currentCareer.skills.length ; i++)
    {
        if(userProgress[currentCareer.skills[i].name] === "current")
        {
            document.querySelector("#nextStep").textContent= "Complete: " + currentCareer.skills[i].name;
            return;
        }
    }
    document.querySelector("#nextStep").textContent ="All skills completed! 🎉"; //if he didn't find any current skill will print this
}


function showSection(name , clickedLink) {
    //all page are hidden
    document.querySelector("#section-home").style.display="none";
    document.querySelector("#section-roadmap").style.display="none";
    document.querySelector("#section-resources").style.display="none";
    document.querySelector("#section-community").style.display="none";

// display the choosed page
   document.querySelector("#section-" + name).style.display="block";

   var links = document.querySelectorAll(".sidebar a");
   for(var i=0 ; i<links.length ; i++)
   {
    links[i].classList.remove("active");
   }

   if(clickedLink)
   {
    clickedLink.classList.add("active");
   }

   //just for style  & knew witch page is open now
   /*.sidebar a.active {
        background: rgba(183, 148, 246, 0.25);
        color: #ffffff; 
        }*/



//to run all web

    if (name === "roadmap") buildRoadmap();
    if (name === "resources") buildResources();
    if (name === "home") {
        updateProgress();
        findNextStep();
    }


}