<template>
    <nav id="mainNav" class="gocargo-navbar navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">GoCarGo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#about">Why us?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#fleet">Our fleet</a>
                    </li>
                    <li class="nav-item dropdown ms-5">
                        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Sort by price</button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">ASC ↑</a></li>
                            <li><a class="dropdown-item" href="#">DESC ↓</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown ms-2">
                        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Brand</button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">Audi</a></li>
                            <li><a class="dropdown-item" href="#">BMW</a></li>
                            <li><a class="dropdown-item" href="#">BYD</a></li>
                            <li><a class="dropdown-item" href="#">Tesla</a></li>
                            <li><a class="dropdown-item" href="#">Toyota</a></li>
                            <li><a class="dropdown-item" href="#">Volvo</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown ms-2">
                        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Color</button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">Black</a></li>
                            <li><a class="dropdown-item" href="#">Blue</a></li>
                            <li><a class="dropdown-item" href="#">Grayness</a></li>
                            <li><a class="dropdown-item" href="#">Green</a></li>
                            <li><a class="dropdown-item" href="#">Red</a></li>
                            <li><a class="dropdown-item" href="#">White</a></li>
                            <li><a class="dropdown-item" href="#">Yellow</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.gocargo-navbar {
    height: 80px;
    padding: 10px 25px;
}
</style>

