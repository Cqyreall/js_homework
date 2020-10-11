document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded')

    const newteamList = document.querySelector('#new-team-form');
    newteamList.addEventListener('submit', handleTeamForm)

    const deleteTeamList = document.querySelector('#delete');
    deleteTeamList.addEventListener('click', handleDeleteForm)

});

const handleTeamForm = function(event){
    event.preventDefault();
    const teamListItem = createNewTeam(event.target);
    const teamList = document.querySelector('#team-list')
    teamList.appendChild(teamListItem)

    event.target.reset()

}

const createNewTeam = function(form){
    const teamListItem = document.createElement('li')

    const teamName = document.createElement('h2')
    teamName.textContent = form.name.value
    teamListItem.appendChild(teamName)

    const teamKit = document.createElement('p')
    teamKit.textContent = form.kit.value
    teamListItem.appendChild(teamKit)

    const teamLeague = document.createElement('h3')
    teamLeague.textContent = form.league.value

    if(form.league.value === 'EPL'){
        teamListItem.classList.add('epl')
    }
    else if (form.league.value === 'Ligue 1'){
        teamListItem.classList.add('ligue-1')
    }
    else if (form.league.value === 'La Liga'){
        teamListItem.classList.add('la-liga')
    }
    else if (form.league.value === 'Serie A'){
        teamListItem.classList.add('serie-a')
    }
    else if (form.league.value === 'Bundesliga'){
        teamListItem.classList.add('bundesliga')
    }
    teamListItem.appendChild(teamLeague)

    return teamListItem
}

const handleDeleteForm = function(){
    let teamList = document.querySelector('ul')
    teamList.innerHTML = ""
}