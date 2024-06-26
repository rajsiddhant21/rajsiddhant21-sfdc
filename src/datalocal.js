const datalocal = {
    accenture: `In my job as a Salesforce developer, I start each day by planning my tasks and checking messages.Then, I spend most of my day writing code for different business needs and talking with the business and analysts to make sure I understand what they want.If something isn't possible technically or time limitation, I figure out a way around it. I also help my team members with any problems they're having and review their work.I spend time learning and reading about Salesforce development and developer guide.I attend meetings with my team to discuss progress and plans.At the end of the day, I review what I've done, update my progress, and get ready for the next day, always staying flexible and ready for changes.`,
    "projects":[
        {
            "startdate":"Dec-2020",
            "enddate":"Jan-2024",
            "name":"Cisco",
            "index":0,
            "numProjects":3,
            "project1": {
                "team1": ` I built a Visualforce (VF) page and its controller in Salesforce. This page helps users go to an external website. I also created an Apex REST class that updates opportunities based on conditions in a JSON input. Additionally, I made console application navigation(sub-tabs) possible using Aura Components.`,
                "team2": `I worked here for Defect Fixes mostly`,
                "team3": ` I've designed two Apex REST classes, which are essentially APIs. The first API provides information about opportunities and related objects when called. The second API checks for team members and returns the requested information`,
                "team4": `I have experience in various Salesforce tasks, including setting up organization-wide emails. I've built triggers and their helper classes from scratch for custom objects. Additionally, I've worked on Visualforce pages using JavaScript and jQuery for styling, along with Apex controllers. I've implemented multi-screen flows with Lightning Web Components (LWC) and maintained state between screens. I'm familiar with both LWC and Aura Components. I've also written two batch classes—one for sending daily emails and another for generating a weekly report—and scheduled them. Furthermore, I've worked on nested Lightning components and their communication.`,
                "team5": `I have experience with events in Lightning Components and have worked on Copado deployments, handling objects, field-level security, Apex classes, and components. I'm familiar with HTTP callouts and have successfully fixed defects in Lightning Web Component multi-screen implementations using flows. Additionally, I specialize in optimizing API calls and Lightning Components by moving business logic to the client side. My approach involves minimizing Apex calls and database operations to enhance performance.`,
                "team6": `I've developed batch classes that automatically create opportunities based on condition from a certain object's record. Additionally, I implemented a logging mechanism to capture and record any errors that may occur during the insertion process. This ensures that any issues are documented for easy identification and resolution.`,
            },
            "project2": {
                "team1": `I played a key role in the Sales Connect project, where we brought an existing system into the Experience Cloud. My main responsibilities included creating and managing four different Objects, setting up their fields and profiles, and establishing validation rules. I also designed a trigger framework and implemented validation using triggers.In addition to this, I worked on out-of-the-box components in the Experience Cloud, wrote batch classes, and developed an API known as the authorization service. With my team, I found a solution for admin users to share images from the library with community users, created an automated process for generating authenticated URLs, and implemented Telium tagging to track user interactions on the website.Furthermore, I made the components mobile-responsive, added a light/dark theme to the site homepage, and wrote extensive code in CSS, JS, and Apex. I also provided CSS support to stakeholder's developers.
                
                `
            },
            "project3": {
                "team1": `Teaming up with a developer, we started this CMS project with a thorough analysis of the existing system. My role centered around communicating with various teams about the APIs and collaborating with businesses to refine user stories. I designed a comprehensive low-level component framework using Lightning Web Components (LWC), comprising around 11 to 12 components. One significant achievement was enabling the seamless upload of media binary files from Salesforce to another server, particularly storage spaces. Alongside coding in JavaScript and Apex, I conducted multiple Proof of Concepts (POCs) with diverse teams to ensure smooth communication between systems. Additionally, I played a supportive role in getting new team members upto speed. Currently, my focus is on defining the lifecycle that the records will undergo depending the the logged In user role.`
            }
        },
        {
            "startdate":"Feb-2024",
            "enddate":"present",
            "name":"Hewlett Packard Enterprise",
            "index":1,
            numProjects:1,
            "project1":{
                "team1":"Presently I'm focused on developing Aura components and worked on an existing custom approval process, which served as an abstraction layer for the actual approval process, while also incorporating various other features. Additionally, I engaged in the conversion of an established legacy Visualforce page and its associated components into Lightning Web Components (LWC). This transition enabled the integration of validations previously housed in Apex into LWC, effectively reducing the character limit of the existing Apex codebase."
            }
        }
    ],
}

export default datalocal;