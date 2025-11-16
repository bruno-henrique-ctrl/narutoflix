export type characterType = {
    id: string;
    name: string;
    rank?: string;
    images: { image_url: string }[];
    summary: string;
    mother?: { name: string };
    father?: { name: string };
    village?: { name: string }
    jutsus?: { name: string, type: string, description: string }[];
} 