/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ResultsPage{
    /**
     * define selectors using getter methods
     */
    get btnFisica () { return $('//div[@class="switch-field"]//a[text()="Física"]') }
    get btnLenguaje () { return $('//div[@class="switch-field"]//a[text()="Lenguaje"]') }
    get btnOcupacional () { return $('//div[@class="switch-field"]//a[text()="Ocupacional"]') }
    get inputSearch () { return $('//input[@class="form-control padding-right"]') }
    get btnSearch () { return $('//input[@value="Buscar"]') }
    get lblName() { return $('//div[@class="strip_list"]//h3') }  
    get btnlistMap() { return $('//i[@class="icon-th-list"]//ancestor::a') }  
    get btnMap () { return $('//i[@class="icon-map-1"]//ancestor::a') }
    get map () { return $('//div[@class="google-map"]') }


    async open () {
        return await browser.url('#/search'); 
    }
}

module.exports = new ResultsPage();
