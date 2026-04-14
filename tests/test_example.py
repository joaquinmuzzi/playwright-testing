import re
from playwright.sync_api import Page, expect


def test_has_title(page: Page):
    page.goto("https://armory.warmane.com/character/Frodouwu/Lordaeron/profile")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile("Warmane"))


def test_get_started_link(page: Page):
    page.goto("https://armory.warmane.com/character/Frodouwu/Lordaeron/profile")

    talents_link = page.get_by_role("link", name="Talents")

    expect(talents_link).to_be_visible()

    talents_link.click()
    page.wait_for_url("https://armory.warmane.com/character/Frodouwu/Lordaeron/talents")

    expect(page).to_have_url("https://armory.warmane.com/character/Frodouwu/Lordaeron/talents")
    expect(page.get_by_text("Frodouwu")).to_be_visible()