class Github{
    constructor(){
        this.clientId = "260841d8ddbc4fb6956d";
        this.clientSecret = "869d6121bd2749f17cc77d32cb9916fe44115386";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clientId = ${this.clientId}&clientSecret = ${this.clientSecret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&${this.repos_sort}&clientId = ${this.clientId}&clientSecret = ${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
          profile,
          repos
        }
    }
}