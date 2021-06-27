/**
 * sub page containing specific selectors and methods for a specific page
 */
 class HomePage{
    /**
     * define selectors using getter methods
     */
    get inputSearch () { return $('#search-input') }
    get btnSearch() { return $('//input[@class="btn_search"]') }
    get btnSpecialityPhisical() { return $('//label[@for="phisical"]') }
    get lblName() { return $('//div[@class="strip_list"]//h3') }  

    async open () {
        return await browser.url('/');
    }
}

module.exports = new HomePage();

