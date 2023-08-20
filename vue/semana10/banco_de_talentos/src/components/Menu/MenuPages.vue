<template>
    <nav class="menu">
        <router-link to="/" class="link">
            <ul>
                <li>
                    <img width="35" height="35" src="https://img.icons8.com/fluency/48/home.png" alt="home"/>
                    <p>HOME</p>
                </li>
            </ul>
        </router-link>
        <router-link to="/talentos" class="link">
            <ul>
                <li>
                    <img width="35" height="35" src="https://img.icons8.com/fluency/48/folder-invoices--v2.png"
                        alt="folder-invoices--v2" />
                    <p>TALENTOS</p>
                </li>
            </ul>
        </router-link>
        <router-link to="/sobre" class="link">
            <ul>
                <li>
                    <img width="35" height="35" src="https://img.icons8.com/fluency/48/map-marker.png" alt="map-marker" />
                    <p>SOBRE</p>
                </li>
            </ul>
        </router-link>
    </nav>
</template>

<style scoped>
li{
    align-items: center;
    display: flex;
    justify-content: space-around;   
    flex-direction: row-reverse;
    border: 2px solid rgb(197, 194, 194);
    width: 180px;
    
}

.menu{
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
}
.link{
    text-decoration: none;
    color: black;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 15px;
}

</style>