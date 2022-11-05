export const verifyToken = async (user) => {
    const currentUser = { user: user.email };

    try {
        const res = await fetch('https://genius-car-server-eta-two.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })

        const data = await res.json();
        localStorage.setItem("token", data.token)
        console.log('inside auth', data);
        return data;

    } catch (error) {
        console.error(error)
    }

}

