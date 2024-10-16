document.addEventListener("DOMContentLoaded", function () {
    const root = document.querySelector('.root');

    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Tugas-2 Praktikum Pemograman Web';
    headerTitle.style.margin = '0';

    header.appendChild(headerTitle);
    root.insertBefore(header, root.firstChild);

    Swal.fire({
        title: "Selamat datang! Silahkan isi form dibawah.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: "rgba(0,0,123,0.4) url('https://sweetalert2.github.io/images/nyan-cat.gif') left top no-repeat"
    });

    const form = document.createElement('form');
    root.appendChild(form);

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';
    form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Katherina Nasrani Barus';
    form.appendChild(usernameInput);

    const usernameError = document.createElement('span');
    usernameError.className = 'error-message';
    usernameError.textContent = 'Please fill out this field.';
    usernameError.style.display = 'none'; 
    form.appendChild(usernameError);

    const nimLabel = document.createElement('label');
    nimLabel.textContent = 'NIM';
    form.appendChild(nimLabel);

    const nimInput = document.createElement('input');
    nimInput.type = 'text';
    nimInput.placeholder = '231401129';
    form.appendChild(nimInput);

    const nimError = document.createElement('span');
    nimError.className = 'error-message';
    nimError.textContent = 'Please fill out this field.';
    nimError.style.display = 'none'; 
    form.appendChild(nimError);

    const komLabel = document.createElement('label');
    komLabel.textContent = 'KOM';
    form.appendChild(komLabel);

    const komInput = document.createElement('input');
    komInput.type = 'text';
    komInput.placeholder = 'C';
    form.appendChild(komInput);

    const komError = document.createElement('span');
    komError.className = 'error-message';
    komError.textContent = 'Please fill out this field.';
    komError.style.display = 'none'; 
    form.appendChild(komError);

    const uploadLabel = document.createElement('label');
    uploadLabel.textContent = 'Upload Photo';
    form.appendChild(uploadLabel);

    const uploadInput = document.createElement('input');
    uploadInput.type = 'file';
    uploadInput.accept = 'image/*';
    form.appendChild(uploadInput);

    const fileError = document.createElement('span');
    fileError.className = 'error-message';
    fileError.textContent = 'Please select a file.';
    fileError.style.display = 'none'; 
    form.appendChild(fileError);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

  
    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';
   

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const nim = nimInput.value.trim();
        const kom = komInput.value.trim();
        const file = uploadInput.files[0];

        
        usernameError.style.display = 'none';
        nimError.style.display = 'none';
        komError.style.display = 'none';
        fileError.style.display = 'none';

        
        usernameInput.classList.remove('error');
        nimInput.classList.remove('error');
        komInput.classList.remove('error');
        uploadInput.classList.remove('error');

        let valid = true;

        if (!username) {
            usernameInput.classList.add('error');
            usernameError.style.display = 'block';
            valid = false;
        }

        if (!nim) {
            nimInput.classList.add('error');
            nimError.style.display = 'block';
            valid = false;
        }

        if (!kom) {
            komInput.classList.add('error');
            komError.style.display = 'block';
            valid = false;
        }

        if (!file) {
            uploadInput.classList.add('error');
            fileError.style.display = 'block';
            valid = false;
        }

        if (valid) {
            
            resultContainer.innerHTML = '';
           
            const userInfo = document.createElement('div');
            userInfo.style.textAlign = 'center';

            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.width = '150px'; 
            img.style.borderRadius = '10px';
            userInfo.appendChild(img);
            
            const nameDisplay = document.createElement('p');
            nameDisplay.textContent = `Nama: ${username}`;
            userInfo.appendChild(nameDisplay);

            const nimDisplay = document.createElement('p');
            nimDisplay.textContent = `NIM: ${nim}`;
            userInfo.appendChild(nimDisplay);

            const komDisplay = document.createElement('p');
            komDisplay.textContent = `KOM: ${kom}`;
            userInfo.appendChild(komDisplay);

            resultContainer.appendChild(userInfo);

           
            root.appendChild(resultContainer);

           
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Form berhasil disubmit!",
                showConfirmButton: false,
                timer: 1900
            });
        }
    });
});


