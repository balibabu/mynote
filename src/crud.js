export default async function GetFile(owner,repo,path,token) {
    try {
        const responseGet = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
          method: 'GET',
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        });
        const fileData = await responseGet.json();
        // const fileContent = atob(fileData.content);
        return fileData;
    } catch (error) {
        console.log(error);
        alert('something went wrong, check console for details');
        return {};
    }
}

export async function updateFile(owner,repo,path,token, fileSHA, newContent) {
  console.log(owner,repo,path,token, fileSHA, newContent);
  
    try {
        await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
          method: 'PUT',
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
          body: JSON.stringify({
            message: 'message',
            content: btoa(newContent),
            sha: fileSHA, 
          }),
        });
        return true;
    } catch (error) {
        console.log(error);
        alert('something went wrong, check console for details');
        return false;
    }
}

export function encrypt(value, key) {
    let encrypted = '';
    for (let i = 0; i < value.length; i++) {
        encrypted += String.fromCharCode(value.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(encrypted); // Encode to base64
}

export function decrypt(encryptedValue, key) {
    let decrypted = '';
    let value = atob(encryptedValue); // Decode from base64
    for (let i = 0; i < value.length; i++) {
        decrypted += String.fromCharCode(value.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decrypted;
}
