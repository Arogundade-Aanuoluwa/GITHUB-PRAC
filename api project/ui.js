class UI{
    constructor(){
        this.profile = document.querySelector("#profile")
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class = "card card-body mb-3">
                <div class="row">
                    <div class ="col-md-3">
                        <img class="img-fluid mb-2" src = "${user.avatar_url}">
                        <a href ="${user.html_url}" target ="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
                        <span class="badge badge-success">Public followers:${user.followers}</span>
                        <span class="badge badge-info">Public following:${user.following}</span>
                        <br><br>
                        <ul class = "list-group">
                            <li class = " list-group-item">Company:${user.company}</li>
                            <li class = " list-group-item">Website/Blog:${user.blog}</li>
                            <li class = " list-group-item">Location:${user.location}</li>
                            <li class = " list-group-item">Since:${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id = "repos"></div>
     `;
    }
    //show user repos
    showRepos(repos){
        let output = "";
        repos.forEach(repo => {
            output += `
            <div class ="card card-body mb-2">
                <div class = "row">
                    <div class = "col-md-6">
                        <a href ="${repo.html_url}" target = "_blank">${repo.name}
                    </div>
                    <div class = "col-md-6">
                    <span class="badge badge-primary mb-3">Stars:${repo.stargazers_count}</span>
                    <span class="badge badge-secondary mb-3">Watchers:${repo.watchers_count}</span>
                    <span class="badge badge-success mb-3">Forks:${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `
        });
        //output repos
        document.querySelector("#repos").innerHTML = output;
    }

    //show alert message
    showAlert(message,className){
        //clear any remaining alert
        this .clearAlert();
        //create a div
        const div = document.createElement("div");
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector(".searchContainer");
        //get search box
        const search = document.querySelector(".search");
        //insert alert
        container.insertBefore(div,search);

        // timeout after 3 sec
        setTimeout(()=>{
            this.clearAlert();
        }, 3000) 
    }
    //clear alert message
    clearAlert(){
        const currentAlert = document.querySelector(".alert");
        if (currentAlert) {
            currentAlert.remove()
        }
    }
    clearProfile(){
        this.profile.innerHTML = "";
    }
    
}