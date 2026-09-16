const browser = "Edge";
const testType = "Sanity";

function getBrowserName()
{
    if(browser.includes("Chrome"))
    {
        console.log("Browser is - "+testType);
    }
    else
    {
        console.log("Browser is - "+browser);
    }
}

function getTestType()
{
    switch(testType)
    {
        case "Regression":
            console.log("Regression type is - "+testType);
            break;
        case "Smoke":
            console.log("Smoke type is - "+testType);
            break;
        case "Sanity":
            console.log("Sanity type is - "+testType);
            break;
        default:
            console.log("Default type is - "+testType);
    }
}

getBrowserName();
getTestType();