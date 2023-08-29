
var Length = 100;

var links = document.links;

function OnPageLoad()
{
  document.getElementById("b").classList.add("FadeOut");
  Array.prototype.forEach.call(links, element => SetLinkOnClick(element));
}


function SetLinkOnClick(o)
{
  console.log("test");
  o.setAttribute('onclick', "javascript:OnLinkClicked(this); return(false);");
}

function OnLinkClicked(link)
{
  document.getElementById("b").classList.remove("FadeOut");
  setTimeout(function() { ChangePage(link.href) }, 300);
}

function ChangePage(page)
{
  window.location.href = page;
}

