import { browser } from '$app/environment';
import { goto } from '$app/navigation';
export const handleBackClick = () => {
	history.back();
};

export const handleHomeRedirect = () => {
	browser && goto('/');
};
