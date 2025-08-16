const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

async function request(
    endpoint,
    method = "GET",
    body = null,
    customHeaders = {}
) {
    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...customHeaders,
    };

    const options = {
        method,
        headers,
        ...(body && { body: JSON.stringify(body) }),
    };

    try {
        const res = await fetch(`${API_BASE_URL}${endpoint}`, options);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.data?.message || data?.message || "API Error"
            );
        }

        return data;
    } catch (err) {
        console.error("API Request Error:", err.message);
        throw err;
    }
}

// CRUD factory
function crudFactory(resource) {
    return {
        getAll: (options) => request(`/${resource}`, "GET", options),
        getOne: (id) => request(`/${resource}/${id}`),
        create: (payload) => request(`/${resource}`, "POST", payload),
        update: (id, payload) =>
            request(`/${resource}/${id}`, "PATCH", payload),
        remove: (id) => request(`/${resource}/${id}`, "DELETE"),
    };
}

const APIService = {
    // Auth
    auth: {
        login: (email, password) =>
            request("/auth/login", "POST", {
                email: email,
                password: password,
            }),
        register: (email, password, fullName) =>
            request("/auth/register", "POST", {
                email: email,
                password: password,
                full_name: fullName,
            }),
    },

    // CRUD
    personas: crudFactory("product-persona"),
    seoPlans: crudFactory("seo-plans"),
    strategies: crudFactory("strategies"),
    blogs: crudFactory("blogs"),
    posts: crudFactory("posts"),

    // AI generation endpoints
    generate: {
        seoPlan: (productPersonaId) =>
            request("/generate/seo-plan", "POST", {
                product_persona_id: productPersonaId,
            }),
        strategy: (productPersonaId) =>
            request("/generate/strategy", "POST", {
                product_persona_id: productPersonaId,
            }),
        blog: (seoPlanId, tone) =>
            request("/generate/blog", "POST", { seo_plan_id: seoPlanId, tone }),
    },
};

export default APIService;
