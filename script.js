function jsonpCallback(data){

  console.log(data);

  for (var i in data['GetRecDisplayListResult']){

    var img = document.createElement('img');
    img.src = data['GetRecDisplayListResult'][i].imageLink;

    var pagelink = document.createElement('a');
    pagelink.href = data['GetRecDisplayListResult'][i].pageLink;
    pagelink.target = "_blank";
    pagelink.classList.add("itemLink");

    var listPrice = document.createElement('span');
    listPrice.textContent = data['GetRecDisplayListResult'][i].listPrice;

    var price = document.createElement('span');
    price.textContent = data['GetRecDisplayListResult'][i].price;

    var productID = document.createElement('div');
    productID.id = data['GetRecDisplayListResult'][i].productID;
    productID.classList.add(data['GetRecDisplayListResult'][i].resultType);
    productID.classList.add("suggestedItem");

    var rating = document.createElement('p');
    rating.textContent = "Rating: " + data['GetRecDisplayListResult'][i].rating;

    var salePrice = document.createElement('span');
    salePrice.textContent = " SALE: " + data['GetRecDisplayListResult'][i].salePrice;
    salePrice.classList.add("red");
    if (data['GetRecDisplayListResult'][i].salePrice != "")
      price.classList.add("strike");

    var title = document.createElement('h3');
    title.textContent = data['GetRecDisplayListResult'][i].title;

    var prices = document.createElement('p');
    prices.textContent = "Price: ";
    prices.appendChild(listPrice);
    prices.appendChild(price);
    prices.appendChild(salePrice);

    productID.appendChild(title);
    productID.appendChild(img);
    productID.appendChild(rating);
    productID.appendChild(prices);
    pagelink.appendChild(productID);
    document.getElementById('results').appendChild(pagelink);

  }
}//jsonpCallback


function getJSON(){
  
  // use JSONP to get around lack of access control header definitions
  var script = document.createElement('script');
  script.src = 'http://live.4-tell.net/Boost2.0/rest/GetRecDisplayList?clientAlias=Windsurf&numResults=3&startPosition=1&resultType=0&fillMode=all&productIDs=803&customerID=1899&att1IDs=&cartIDs=772,274&clickStreamIDs=33,34,35&blockIDs=36&format=json&callback=jsonpCallback';
  document.getElementsByTagName('head')[0].appendChild(script);

}//getJSON
