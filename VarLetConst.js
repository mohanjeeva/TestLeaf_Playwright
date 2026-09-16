const browserVersion = "Chrome"

function getBrowserVersion()
{// function scope 
    if(browserVersion.includes("Chrome"))
    {
        console.log("Browser is - Chrome");
        browserVersion = "Edge"
        console.log(browserVersion);
    }
    console.log(browserVersion);
}

getBrowserVersion();
console.log(browserVersion);