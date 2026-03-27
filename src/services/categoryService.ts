import { notFound } from "@tanstack/react-router";

const API_BASE_URL = "https://techstation-api.onrender.com";

type CategoryResponse = {
  data?: Array<{ id: number; name: string; slug?: string }>;
};

export async function getCategoryBySlug(slug: string) {
    const normalizedSlug = slug.trim().toLowerCase();

    const params = new URLSearchParams({ page: '1', limit: '1', slug: normalizedSlug });
    const response = await fetch(`${API_BASE_URL}/categories?${params.toString()}`);

    if (!response.ok) {
        throw notFound();
    }

    const result: CategoryResponse = await response.json();

    // Fallback defensivo caso a API não filtre por slug no backend.
    const category = result.data?.find((item) => item.slug?.toLowerCase() === normalizedSlug) ?? result.data?.[0];

    if (!category) {
        throw notFound();
    }

    return category;
}

export async function getCategoryByName(name: string) {
    const params = new URLSearchParams({ page: '1', limit: '1', search: name });

    console.log(`${API_BASE_URL}/categories?${params.toString()}`);

    const response = await fetch(`${API_BASE_URL}/categories?${params.toString()}`);

    if (!response.ok) {
        throw notFound();
    }

    const result = await response.json();

    if (!result.data || result.data.length === 0) {
        throw notFound();
    }

    return result.data[0];
}