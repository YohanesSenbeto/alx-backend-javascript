import { uploadPhoto, createUser } from "./utils";
export default async function handleProfileSignup() {
	    try {
		            const [photoResponse, userResponse] = await Promise.all([
				                uploadPhoto("photo-profile-1"),
				                createUser("Guillaume", "Salva"),
				            ]);
		            console.log(`${userResponse.firstName} ${userResponse.lastName}`);
		        } catch (error) {
				        console.error("Signup system offline");
				    }
}
