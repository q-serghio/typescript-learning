import { z } from "zod";
const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;
async function fetchData(): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    console.log(result);
    if (!result.success) {
      throw new Error(`Invalid data ${result.error}`);
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// interface Tour {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: number;
// }

const tourData: Array<Tour> | undefined = await fetchData();
console.log(tourData);

tourData.map((tour) => {
  console.log(tour.name);
});
