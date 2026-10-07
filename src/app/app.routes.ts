import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { SignLayout } from './layouts/sign-layout/sign-layout';
import { UserPage } from './pages/user-page/user-page';
import { PlaylistPage } from './pages/playlist-page/playlist-page';
import { FavoritesPage } from './pages/favorites-page/favorites-page';

export const routes: Routes = [
    {
        path: "",
        component: MainLayout,
        children: [
            {
                path: "my",
                component: UserPage
            }, 
            {
                path: "my/playlists",
                component: PlaylistPage
            },
            {
                path: "my/favs",
                component: FavoritesPage
            }
        ]
    },
    {
        path: "sign",
        component: SignLayout
    }
];
