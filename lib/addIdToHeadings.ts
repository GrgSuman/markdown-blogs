import { slugify } from "./slugify";

export const addIdsToHeadings = (htmlContent) => {
    // Return empty string if content is empty
    if (!htmlContent) return '';
  
    // Create a temporary div to parse HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
  
    // Find all h2 elements
    const h2Elements = tempDiv.getElementsByTagName('h2');
  
    // Add id attribute to each h2
    Array.from(h2Elements).forEach((h2) => {
      // Get text content and create slug for id
      const headingText = h2.textContent || '';
      const headingId = slugify(headingText);
      
      // Set the id attribute
      h2.setAttribute('id', headingId);
    });
  
    // Return the modified HTML string
    return tempDiv.innerHTML;
  };