import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecipePage, RecipesPages, SearchPage } from '../pages';

export const AppRouter = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RecipesPages />
        },
        {
            path: '/search',
            element: <SearchPage />
        },
        {
            path: '/recipe/:id',
            element: <RecipePage />
        }
    ]);

    return (
        <RouterProvider router={routes} />
    )
}
