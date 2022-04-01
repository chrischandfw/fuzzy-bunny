/* eslint-disable indent */
import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const data = new FormData(form);
    const familyId = data.get('family-id');
    const name = data.get('bunny-name');
    // use createBunny to create a bunny with this name and family id
    await createBunny({
        name: name,
        family_id: familyId
    });
    form.reset();
    window.location.href = '../families';
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
	const selectEl = document.querySelector('select');
    const families = await getFamilies();
    // go get the families from supabase
    for (let family of families) {
		const optionEl = document.createElement('option');
		optionEl.textContent = family.name;
		optionEl.value = family.id;

		selectEl.append(optionEl);
		
    }
    // for each family

    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
