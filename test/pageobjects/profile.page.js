/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ProfilePage{
    /**
     * define selectors using getter methods
     */
     get webservice () { return 'https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227bc1e6 '}
     get url () { return 'https://terapeutica.digital/#/specialist/bfea3295-af20-4824-8bed-170a227bc1e6' }
}

module.exports = new ProfilePage();
